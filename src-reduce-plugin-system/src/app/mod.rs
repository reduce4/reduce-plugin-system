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
mod plugin;

struct App{
    dsl: Option<dsl::Dsl>;
    engine: engine::Engine;
    plugins: Option<Vec<plugin::Plugin>>;
}

impl trait::Distribution for App{
    fn device_discover(&self) -> Option<Vec<device::Device>>{
        todo!();
    }
    fn service_flow(&self) -> Result<()>{
        todo!();
    }
    fn event_flow(&self) -> Result<()>{
        todo!();
    }
}

impl App{
    fn start(&self){}
}