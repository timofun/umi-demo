import React, { useState } from 'react';
import { Button, WhiteSpace } from 'antd-mobile';
import styles from './index.css';
import { Models } from 'rmc-tabs/lib/Models'
function Example() {
  // 声明一个叫 “count” 的 state 变量。
  const [count, setCount] = useState(0);
  const buttonClickHandler = () => {
    setCount(count + 1)
  };
  let obj = {
    aaaaa: 111,
    value: 222
  };
  const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} ${styles.placeholder}`} {...restProps}>Block</div>
  );
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <WhiteSpace size="xs" />
      <PlaceHolder className="aaa" {...obj}/>
  
      <WhiteSpace size="sm" />
      <PlaceHolder />
  
      <WhiteSpace />
      <PlaceHolder />
  
      <WhiteSpace size="lg" />
      <PlaceHolder />
  
      <WhiteSpace size="xl" />
      <PlaceHolder />
      <Button onClick={buttonClickHandler}>
        Click me
      </Button>
    </div>
  );
}

export default Example
