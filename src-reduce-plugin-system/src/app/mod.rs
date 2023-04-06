mod adaptation;
mod code;
mod device;
mod dsl;
mod engine;
mod event;
mod plugin;
mod service;
mod traits;
mod ui;

struct App {
    dsl: Option<dsl::Dsl>,
    engine: engine::Engine,
    plugins: Option<Vec<plugin::Plugin>>,
}

impl traits::Distribution for App {
    fn device_discover(&self) -> Option<Vec<device::Device>> {
        todo!();
    }
    fn service_flow(&self) -> Result<(), ()> {
        todo!();
    }
    fn event_flow(&self) -> Result<(), ()> {
        todo!();
    }
}

impl App {
    fn start(&self) {}
}
