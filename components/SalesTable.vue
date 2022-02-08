<template>
  <TablePanel title="Recent Sales">
    <table class="table">
      <thead>
        <tr>
          <th>Client</th>
          <th>Description</th>
          <th>Value</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="sale in tableData" v-bind:key="sale.id">
          <td>{{sale.client}}</td>
          <td>{{sale.description}}</td>
          <td>{{sale.value}}</td>
          <td>{{sale.itemCount}}</td>
        </tr>
      </tbody>
    </table>
  </TablePanel>
</template>

<script>
import TablePanel from "./TablePanel";
export default {
  components: { TablePanel },
  props: ["tableData"]
};
</script>