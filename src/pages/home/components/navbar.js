import React from 'react';
import { Link } from 'react-router-dom';

const navList = [
  { type: 1, name: '推荐' },
  { type: 2, name: '视频' },
  { type: 3, name: '热点' },
  { type: 4, name: '社会' },
  { type: 5, name: '娱乐' },
  { type: 6, name: '军事' },
  { type: 7, name: '科技' },
  { type: 8, name: '汽车' },
  { type: 9, name: '房产' },
  { type: 10, name: '家居' },
  { type: 11, name: '体育' },
  { type: 12, name: '财经' }
];

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidUpdate(preProps) {
    const preType = preProps.type;
    const curType = this.props.type;
    if (preType !== curType) {
      const domEl = preType > curType ?
      this[`nav${curType - 2}`] || this[`nav${curType - 1}`] || this[`nav${curType}`] :
      this[`nav${curType + 2}`] || this[`nav${curType + 1}`] || this[`nav${curType}`];
      domEl.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      });
    }
  }

  render() {
    const { type, onChangeNav } = this.props;

    return (
      <div className="navbar">
        <div className="navlist">
          {navList.map(item => (
            <span
              key={item.type}
              ref={el => this[`nav${item.type}`] = el}
              className={item.type === type ? 'nav active' : 'nav'}
              onClick={() => onChangeNav(item.type)}
            >{item.name}</span>
          ))}
        </div>
        <Link className="plusnav" to="/channels" />
      </div>
    );
  }
}

export default NavBar;
