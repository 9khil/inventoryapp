<script>
  import logo from './assets/labben.png';
  import InventoryList from './lib/InventoryList.svelte';
  import Fa from 'svelte-fa';
  import { faPlus } from '@fortawesome/free-solid-svg-icons';
  import AddItem from './lib/AddItem.svelte';

  let showAddItem = false;

  function toggleShowAddItem(){
    showAddItem = !showAddItem;
  }

</script>

<header>
  <span>
    <h1>Inventory</h1>
    <button on:click={toggleShowAddItem}><Fa class="add-icon" icon={faPlus}/> Add item</button>
  </span>
  <img src={logo} alt="Logo" />
</header>

<main>
  {#if showAddItem}
    <AddItem/>
  {/if}

  <InventoryList/>
</main>

<style>
  :root {
    font-family: 'Helvetica Neue', sans-serif;
  }

  header{
    width: 100%;
    display: grid;
    grid-template-columns: auto 75px;
    height: 75px;
  }
  
  header > span{
    display: flex;
    justify-content: center;
    margin-left: 75px;
  }

  header > span button{
    height: 38px;
    margin: 16px 0 0 16px;
  }

  header img{
    height: 60px;
    text-align: right;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }
  h1 {
    text-transform: uppercase;
    font-size: 40px;
    font-weight: 100;
    line-height: 75px;
    margin: 0;
  }

</style>
