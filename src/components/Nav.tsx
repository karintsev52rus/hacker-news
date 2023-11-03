import type { MenuProps } from 'antd';
import {Menu} from 'antd'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = ()=>{

    const items: MenuProps['items'] = [
        {
            label: <Link to = "/"> News </Link>,
            key: 'news'
          },
    ]
    const [current, setCurrent] = useState('news');

    const onClick: MenuProps['onClick'] = (e) => {
      console.log('click ', e);
      setCurrent(e.key);
    };
  
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
}

export {Nav}