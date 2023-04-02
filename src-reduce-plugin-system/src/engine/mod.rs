mod code;
/**
 * low code engine
 */
pub struct Engine {

}

impl Engine {
    code_gen() -> code::Code;
}


/** service component */
trait serice_manager{
    service_flow();
    service_scan();
    service_install();
    service_uninstall();
}

/** ui component */
trait ui_manager{
    ui_scan();
}
