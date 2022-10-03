<template>
  <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="#">ZUZU</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav>
                    <b-nav-item href="/"><b-icon-house></b-icon-house>Home</b-nav-item>
                    <b-nav-item href="/rent">Rent</b-nav-item>
                    <b-nav-item href="#">Agreement</b-nav-item>
                </b-navbar-nav>

                <!-- Left aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="#">Blog</b-nav-item>
                    <b-nav-item href="#">About Us</b-nav-item>
                    <b-nav-item href="#">Contact</b-nav-item>

                    <!-- Language dropdown menu items -->
                    <b-nav-item-dropdown text="Language" right>
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                        <b-dropdown-item href="#">TR</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown right>

                        <!-- User dropdown menu items -->
                        <template v-slot:button-content>
                            <em>User</em>
                        </template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {

}
</script>

