pub enum Servicetype{
    Chatgpt
}
pub struct Service {
    service_id: i128;
    service_type: Servicetype;
    is_builtin: bool;
}
