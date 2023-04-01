mod utils;
use std::sync::{Arc, Mutex};

use lazy_static::lazy_static;

use wasm_bindgen::{convert::ReturnWasmAbi, prelude::*};

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

lazy_static! {
    static ref MY_VEC: Arc<Mutex<Vec<i32>>> = Arc::new(Mutex::new(Vec::new()));
}

#[wasm_bindgen]
pub fn put(greeting: i32) -> i32 {
    let mut my_vec = MY_VEC.lock().unwrap();
    log(my_vec.len().to_string().as_str());
    my_vec.push(1);
    1
}
#[wasm_bindgen]
pub fn get() -> usize {
    let mut my_vec = MY_VEC.lock().unwrap();
    my_vec.len()
}
