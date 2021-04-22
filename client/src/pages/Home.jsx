import { DrizzleContext } from '@drizzle/react-plugin';

const Home = () => (
  <DrizzleContext.Consumer>
    {drizzleContext => {
      const { drizzle, drizzleState, initialized } = drizzleContext;
      let owner;
      if (!initialized) {
        return "Loading..."
      } else {
        owner = drizzle.contracts.Migrations.address;
        console.log(owner)
      }

      return (
        <span>Owner : {owner}</span>
      )
    }}
  </DrizzleContext.Consumer>
);

export default Home;