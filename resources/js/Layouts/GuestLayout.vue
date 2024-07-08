<template>
    <v-app class="layout">
        <v-container class="h-100">
            <v-row class="h-100 justify-center align-center">
                <v-col cols="12" sm="9" md="6">
                    <v-card class="w-100">
                        <v-card-item class="title-section">
                            <v-card-title>Example app</v-card-title>
                            <v-card-subtitle>We make the best example in the world</v-card-subtitle>
                        </v-card-item>
                        <v-card-text>
                            <slot />
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script setup lang="ts">

</script>

<style scoped>
.title-section {
    margin-bottom: 30px;
}
</style>
