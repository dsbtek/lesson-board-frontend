#include <emscripten.h>
#include <stdint.h>
#include <stdlib.h>

#define WIDTH 800
#define HEIGHT 600

uint8_t framebuffer[WIDTH * HEIGHT * 4];

extern "C" {

EMSCRIPTEN_KEEPALIVE
uint8_t* getFrameBuffer() {
    return framebuffer;
}

EMSCRIPTEN_KEEPALIVE
void clearFrameBuffer() {
    for (int i = 0; i < WIDTH * HEIGHT * 4; i++) {
        framebuffer[i] = 255; // white background
    }
}

EMSCRIPTEN_KEEPALIVE
void drawLine(int x1, int y1, int x2, int y2) {
    int dx = abs(x2 - x1), sx = x1 < x2 ? 1 : -1;
    int dy = -abs(y2 - y1), sy = y1 < y2 ? 1 : -1;
    int err = dx + dy;

    while (true) {
        if (x1 >= 0 && x1 < WIDTH && y1 >= 0 && y1 < HEIGHT) {
            int index = (y1 * WIDTH + x1) * 4;
            framebuffer[index + 0] = 0;   // R
            framebuffer[index + 1] = 0;   // G
            framebuffer[index + 2] = 0;   // B
            framebuffer[index + 3] = 255; // A
        }
        if (x1 == x2 && y1 == y2) break;
        int e2 = 2 * err;
        if (e2 >= dy) { err += dy; x1 += sx; }
        if (e2 <= dx) { err += dx; y1 += sy; }
    }
}
}
