#!/bin/bash

# Create the output directory if it doesn't exist
mkdir -p public/wasm

# emcc public/wasm/drawing.cpp \
#   -o public/wasm/drawing.js \
#   -s WASM=1 \
#   -s MODULARIZE=1 \
#   -s ENVIRONMENT='web' \
#   -s EXPORT_NAME='createModule' \
#   -s ALLOW_MEMORY_GROWTH=1 \
#   -s EXPORTED_FUNCTIONS='["_drawLine", "_getFrameBuffer", "_clearFrameBuffer"]' \
#   -s EXPORTED_RUNTIME_METHODS='["ccall", "cwrap"]'

emcc public/wasm/drawing.cpp \
  -o public/wasm/drawing.js \
  -o public/wasm/math.js \
  -s MODULARIZE=1 \
  -s EXPORT_ES6=0 \
  -s EXPORT_NAME="createModule" \
  -s EXPORTED_FUNCTIONS="['_drawLine', '_getFrameBuffer', '_clearFrameBuffer']" \
  -s EXPORTED_RUNTIME_METHODS="['HEAPU8']" \
  -s ENVIRONMENT=web \
  -O3
