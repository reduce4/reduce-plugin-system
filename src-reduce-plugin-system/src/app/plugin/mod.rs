pub struct Plugin {
    versin: String,
    is_org: bool,
    price: f64,
}

impl Plugin {
    /** plugin load */
    pub fn load(&self) -> Result<(), ()> {
        todo!()
    }
    /** plugin active */
    pub fn tear_up(&self) -> Result<(), ()> {
        todo!()
    }
    /** plugin deactive */
    pub fn tear_down(&self) -> Result<(), ()> {
        todo!()
    }
}
