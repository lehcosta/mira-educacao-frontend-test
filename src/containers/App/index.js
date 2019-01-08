import React, { PureComponent } from "react";
import { connect } from "react-redux";

import Header from "../../components/Header";
import PersonItem from "../../components/PersonItem";
import Button from "../../components/Button";
import Spinner from "../../components/Spinner";

import peopleActions from "../../redux/people/actions";
import { isLastPage } from "../../redux/people/selector";
import strpad from "../../helpers/strpad";

import "./style.css";

const { fetchPeople, fetchPeopleSetPage } = peopleActions;

class App extends PureComponent {
  componentDidMount() {
    this.props.fetchPeople();
  }

  renderPerson = (person, index) => {
    const {
      people: {
        list: {
          meta: { current_page }
        }
      }
    } = this.props;

    const ITEMS_PER_PAGE = 10;

    const k = strpad((current_page - 1) * ITEMS_PER_PAGE + (index + 1), 2);

    return <PersonItem key={person.name} index={k} name={person.name} />;
  };

  onPrevPage = () => {
    const {
      people: {
        list: {
          meta: { current_page }
        }
      }
    } = this.props;

    this.props.fetchPeopleSetPage({ page: current_page - 1 });
  };

  onNextPage = () => {
    const {
      people: {
        list: {
          meta: { current_page }
        }
      }
    } = this.props;

    this.props.fetchPeopleSetPage({ page: current_page + 1 });
  };

  render() {
    const { people, isLastPage } = this.props;

    const {
      list: {
        meta: { current_page }
      }
    } = people;

    const HasError = people.list.error ? (
      <div className="app__error">
        <h1>Estamos em manutenção. Tente novamente mais tarde. </h1>
      </div>
    ) : null;

    return (
      <div className="app">
        <Header />
        {HasError}

        {people.list.loading && (
          <div className="app__loading">
            <Spinner />
          </div>
        )}
        {!people.list.loading && !people.list.error && (
          <div className="app__result-list">
            {people.list.data.map(this.renderPerson)}
          </div>
        )}
        <div className="app__controls">
          {current_page > 1 && (
            <div className="app__controls__btn">
              <Button disabled={people.list.loading} onClick={this.onPrevPage}>
                Anterior
              </Button>
            </div>
          )}
          {!isLastPage && (
            <div className="app__controls__btn">
              <Button
                type="primary"
                onClick={this.onNextPage}
                disabled={people.list.loading}
              >
                Próxima
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  people: state.people,
  isLastPage: isLastPage(state)
});

export default connect(
  mapStateToProps,
  { fetchPeople, fetchPeopleSetPage }
)(App);
