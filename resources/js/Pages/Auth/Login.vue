<template>
    <GuestLayout>
        <Head title="Log in" />

        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>

        <form @submit.prevent="submit">
            <v-text-field
                id="email"
                class="mb-4"
                type="email"
                label="Email"
                v-model="form.email"
                required
                autocomplete="username"
            />
            <v-text-field
                id="password"
                class="mb-4"
                type="password"
                label="Password"
                v-model="form.password"
                required
                autocomplete="current-password"
            />
            <v-checkbox 
                name="remember"
                label="Remember me"
                v-model:checked="form.remember"
            />
            <v-checkbox label="Checkbox"></v-checkbox>

            <div class="flex items-center justify-start button-section">
                <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Log in
                </PrimaryButton>

                <Link
                    v-if="canResetPassword"
                    :href="route('password.request')"
                    class="ms-4 underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Forgot your password?
                </Link>
            </div>
        </form>
    </GuestLayout>
</template>

<script setup lang="ts">
import GuestLayout from '@/Layouts/GuestLayout.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

let errors = ['asd'];

defineProps<{
    canResetPassword?: boolean;
    status?: string;
}>();

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => {
            form.reset('password');
        },
    });
};
</script>

<style scoped>
.button-section {
    margin-top: 40px;
}
</style>
