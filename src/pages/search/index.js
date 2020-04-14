import React from 'react';
import Qs from 'qs';
import GuessWord from './components/guessword';
import AssociateWord from './components/associateword';
import './index.less';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAssociateWord: false,
      searchWord: Qs.parse(props.location.search.slice(1)).key
    }
  }

  componentDidMount() {
    if (this.state.searchWord) {
      this.handleSearch();
    }
  }

  showAssociateWord = () => {
    this.setState({ showAssociateWord: true });
  }

  hideAssociateWord = () => {
    this.setState({ showAssociateWord: false });
  }

  handleClearInput = e => {
    e.stopPropagation();
    e.preventDefault();
    this.hideAssociateWord();
    this.setState({ searchWord: '' });
  }

  handleInputChange = e => {
    const value = e.target.value;
    this.setState({ searchWord: value });
    
    if (value) {
      this.showAssociateWord();
    } else {
      this.hideAssociateWord();
    }
  }

  handleSearchBtnClick = () => {
    const { searchWord } = this.state;
    
    this.hideAssociateWord();
    if (!searchWord) {
      return this.props.history.goBack();
    }
    this.handleSearch();
  }

  handleSelectGuess = (word) => {
    this.hideAssociateWord();

    const { searchWord } = this.state;
    if (searchWord === word) return;

    this.setState({ searchWord: word }, () => {
      this.handleSearch();
    });
  }

  handleSearch = () => {
    const { searchWord } = this.state;
    console.log(searchWord);
  }

  render() {
    const { showAssociateWord, searchWord } = this.state;

    return (
      <div className="page-root page-search">
        <header className="header">
          <div className="searchbox">
            <input
              autoFocus
              type="text"
              className="input"
              placeholder="请输入搜索内容"
              value={searchWord}
              onChange={this.handleInputChange}
            />
            <span className="searchbtn" onClick={this.handleSearchBtnClick}>{searchWord ? '搜索' : '取消'}</span>
            <span className={searchWord ? 'clear show' : 'clear'} onClick={this.handleClearInput} />
          </div>
        </header>

        {showAssociateWord && <AssociateWord word={searchWord} onSelectWord={this.handleSelectGuess} />}

        <GuessWord onSelectWord={this.handleSelectGuess} />
      </div>
    );
  }
}

export default Search;
