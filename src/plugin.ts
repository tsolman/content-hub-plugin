import { Config, Plugin } from 'payload/config';
import Users from './collections/Users';
import Categories from './collections/Categories';
import Articles from './collections/Articles';
import Artwork from './collections/Artwork';
import { Media } from './collections/Media';

const addContentHub: Plugin = (incomingConfig: Config): Config => {
    // Find all incoming auth-enabled collections
    // so we can create a lastModifiedBy relationship field
    // to all auth collections
    const authEnabledCollections = incomingConfig.collections.filter(
        collection => Boolean(collection.auth)
    );

    // Spread the existing config
    const config: Config = {
        ...incomingConfig,
        collections:
            [
                Users,
                Categories,
                Articles,
                Artwork,
                Media,
            ]
    };

    return config;
};

export default addContentHub;