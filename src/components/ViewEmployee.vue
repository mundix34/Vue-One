<template>
    <div id="view-employee">
<ul class="collection with-header">
    <li class="collection-header"> <h4> {{ name}} </h4></li>
</ul>
    </div>
</template>
<script>
import db from './firebaseInit'
export default {
    name: 'view-employee',
    data () {
        return {
            employee_id: null,
            name: null,
            dept: null,
            position: null
            
        }
    },
    beforeRouteEnter (to, from, next){
        db.collection('employees').where('employee_id', '==', to.params.employee_id).get().then(querySnapshot => {
            querySnapshot.forEach( doc => {
                next( vm => {
                    vm.employee_id=doc.data().employee_id,
                    vm.name=doc.data().name,
                    vm.dept=doc.data().Dept,
                    vm.position=doc.data().position
                
            })
        })

    })
    },
    watch:{
        '$route': 'fetchData'
    },
    methods: {
        fetchData(){
            db.collection('employees').where('employee_id', '==', this.$route.params.employee_id).get().then(querySnapshot => {
                querySnapshot.forEach( doc => {
                    this.employee_id=doc.data().employee_id
                    this.name=doc.data().name
                    this.dept=doc.data().Dept
                    this.position=doc.data().position
                })
            })
        }
    }

}
</script>

