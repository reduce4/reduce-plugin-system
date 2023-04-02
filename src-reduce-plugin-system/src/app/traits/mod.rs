pub trait Distribution{
    device_discover(&self) -> Option<Vec<device::Device>>; /** device discover */
    service_flow(&self) -> Result<()>; /** service component transfer */
    event_flow(&self) -> Result<()>; /** event transfer */
}