import React, { PureComponent } from 'react';

class SearchInput extends PureComponent {
  handeInputChange = event => {
    this.props.search(event.target.value);
  };

  render() {
    const { isLoading } = this.props;
    return (
      <div>
        <input onChange={this.handeInputChange} />
        {isLoading && <div>Loading...</div>}
      </div>
    );
  }
}

export default SearchInput;
