export const navItems = [
    {
        name: 'Dashboard',
        url: '/admin/dashboard',
        icon: 'icon-speedometer',
    },
    // {
    //     name: 'Admin',
    //     url: '/admin/admin',
    //     icon: 'icon-user'
    // },
    {
        name: 'Users',
        url: '/admin/users',
        icon: 'icon-user'
    },
    {
        name: 'Jobs',
        url: '/admin/jobs',
        icon: 'icon-briefcase',
    },
    {
        name: 'Jobs Properties',
        url: '/buttons',
        icon: 'icon-briefcase',
        children: [
            {
                name: 'All Jobs Properties',
                url: '/admin/jobs-properties',
                icon: 'icon-pencil',
            },
            {
                name: 'Job Traders',
                url: '/admin/job-traders',
                icon: 'icon-pencil',
            },
            {
                name: 'Job Works',
                url: '/admin/job-works',
                icon: 'icon-pencil',
            }
        ]
    },
    // {
    //     name: 'Posts',
    //     url: '/admin/posts',
    //     icon: 'icon-pencil'
    // },
    // {
    //     name: 'Contracts',
    //     url: '/admin/contracts',
    //     icon: 'icon-pencil'
    // }, {
    //     name: 'Companies',
    //     url: '/admin/companies',
    //     icon: 'icon-pencil'
    // }, 
    // {
    //     name: 'Test',
    //     url: '/admin/test',
    //     icon: 'icon-pencil'
    // },
];
