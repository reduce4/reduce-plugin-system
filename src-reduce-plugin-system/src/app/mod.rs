mod adaptation;
mod builtin;
mod code;
mod engine;
mod service;
mod ui;
mod trait;
mod rsi;
mod device;
mod event;
mod dsl;

struct App{
    dsl: dsl::Dsl;
    engine: engine::Engine;
}
