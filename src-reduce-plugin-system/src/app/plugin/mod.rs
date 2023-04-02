pub struct Plugin {
    versin: String;
    is_org: bool;
    price: f64;
}

impl Plugin{
    pub load(&self) -> Result<()>; /** plugin load */
    pub tear_up(&self) -> Result<()>; /** plugin active */
    pub tear_down(&self) -> Result<()>; /** plugin deactive */
}
