pub enum Platform {
    Web,
    Flutter,
    Untiy,
}
impl Platform{
    pub fn is(platform_code: i32) => Platform{
        match platform_code{
            0 => Platform::Web,
            1 => Platform::Flutter,
            2 => Untiy
        }
    }
}