pub enum Platform {
    Web,
    Flutter,
    Untiy,
    NotSupported,
}
impl Platform {
    pub fn is(platform_code: usize) -> Platform {
        match platform_code {
            0 => Platform::Web,
            1 => Platform::Flutter,
            2 => Platform::Untiy,
            _ => Platform::NotSupported,
        }
    }
}
