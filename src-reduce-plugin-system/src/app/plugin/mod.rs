pub struct Comment {
    name: String,
    content: String,
    star: i32,
}
pub struct Usage {
    open_time: String,
    close_time: String,
    duration: f32,
    command_history: Vec<String>,
}
pub struct RoadMap {
    content: HashMap<String, String>,
}

pub struct User {}

pub struct Plugin {
    org_id: String, /*plugin only id in org*/
    org_name: String,
    icon: String,
    author_name: String,
    profile_page: String,
    national_name: Vec<String>,
    comment: Vec<Comment>,
    repo_link: String,
    version: f32,
    description: String,
    pay_qrcode: Vec<u8>,
    component_url: String,
    usage: Vec<Usage>,
    roadmap: RoadMap,
    org_icon: String,
    command_list: Vec<String>,
}
pub struct Message {
    from_org_id: String,
    content: String,
}
enum Thing {
    PUBLISH_PLUGIN(String),   /*org_id*/
    TRANSFER(String, String), /*org_id, target_person_email*/
}
pub struct Task {
    time: String,
    thing: Thing,
}
pub struct PluginMarket {
    data_flow_editor_url: String,
    message: Message,
    task: Vec<Task>,
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
