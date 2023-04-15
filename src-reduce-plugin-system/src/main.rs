use std::fs;
use swc::{
    config::{Config, JscConfig, Options},
    Compiler, TransformOutput,
};

fn main() {
    // 读取JSX文件
    let jsx_code = fs::read_to_string("example.jsx").unwrap();

    // 配置SWC编译器
    let mut config = Config::default();
    config.jsc = JscConfig {
        syntax: Some(Options {
            jsx: true, // 启用JSX语法
            ..Default::default()
        }),
        ..Default::default()
    };

    // 创建SWC编译器
    let mut compiler = Compiler::new(config);

    // 编译JSX代码
    let output: TransformOutput = compiler
        .process_js(jsx_code, None)
        .expect("Failed to compile JSX");

    // 输出编译结果
    println!("{}", output.code);
}
