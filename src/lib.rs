#[no_mangle]
pub extern fn fibonacci(x: u32) -> u32 {  
  if x <= 2 {
    return 1;
  } else {
    return fibonacci(x - 1) + fibonacci(x - 2);
  }
}