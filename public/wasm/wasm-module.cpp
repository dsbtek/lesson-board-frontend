#include <emscripten/bind.h>

int addNumbers(int a, int b) {
    return a + b;
}

EMSCRIPTEN_BINDINGS(my_module) {
    emscripten::function("addNumbers", &addNumbers);
}
