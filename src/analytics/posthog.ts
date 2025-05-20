import posthog from 'posthog-js'

posthog.init('phc_BOoBU0uLBv0T9CMMukF403GM9PMyZeR1aV8HVNrZhut',
    {
        api_host: 'https://us.i.posthog.com',
        person_profiles: 'always'
    }
)

export default posthog