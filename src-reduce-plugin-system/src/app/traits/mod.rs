pub trait Distribution{
    fn device_discover(&self) -> Option<Vec<device::Device>>; /** device discover */
    fn service_flow(&self) -> Result<()>; /** service component transfer */
    fn event_flow(&self) -> Result<()>; /** event transfer */
}

pub trait PluginManager{
    fn fetch(&self, is_org: bool) -> Option<Vec<plugin::Plugin>>; /** fetch owner plugin */
    fn fetch_plugin_list(&self, is_org: bool)->  Option<Vec<plugin::Plugin>>;/** fetch all plugin */
    fn fetch_recommend_list(&self, is_org: bool)-> Option<Vec<plugin::Plugin>>;/** using recommend algorithm to find useful plugin */
    fn install(&self, plugin_id: String, is_org: bool)-> Result<()>;
    fn uninstall(&self, plugin_id: String, is_org: bool)-> Result<()>;
    fn upload(&self, plugin_url: String, is_org: bool)-> Result<()>; /** fetch from backend and save */
    fn share(&self, plugin_id: String, is_org: bool)-> Result<String>; /** share private plugin to public web */
    fn approve(&self, plugin_id: String, is_org: bool) -> Result<()>; /** share plugin to all of people on the web */
    fn update(&self, plugin_id: String, is_org: bool) -> Result<()>; /** update plugin */
    fn subscribe(&self, plugin_author_or_org_id: String, is_org: bool) -> Result<()>; /** subscribe plugin author's update, discover new plugin */
    fn pay(&self, plugin_id: String, is_org: bool) -> Result<()>;
}
