#include <emscripten.h>
#include <cmath>

extern "C" {
    EMSCRIPTEN_KEEPALIVE
    double solveEquation(double a, double b, double c) {
        return (-b + sqrt(b * b - 4 * a * c)) / (2 * a); // Quadratic formula
    }
}
