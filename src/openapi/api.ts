// tslint:disable
/**
 * api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as globalImportUrl from 'url';
import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface InlineObject
 */
export interface InlineObject {
    /**
     * 
     * @type {string}
     * @memberof InlineObject
     */
    screen_name?: string;
    /**
     * 
     * @type {number}
     * @memberof InlineObject
     */
    layer_count?: number;
    /**
     * 
     * @type {boolean}
     * @memberof InlineObject
     */
    with_user_detail?: boolean;
}
/**
 * 
 * @export
 * @interface TweetData
 */
export interface TweetData {
    /**
     * 
     * @type {number}
     * @memberof TweetData
     */
    tweet_id: number;
    /**
     * 
     * @type {string}
     * @memberof TweetData
     */
    text: string;
    /**
     * 
     * @type {boolean}
     * @memberof TweetData
     */
    is_reply: boolean;
    /**
     * 
     * @type {number}
     * @memberof TweetData
     */
    user_id: number;
    /**
     * 
     * @type {string}
     * @memberof TweetData
     */
    user_name: string;
    /**
     * 
     * @type {string}
     * @memberof TweetData
     */
    user_screen_name: string;
    /**
     * 
     * @type {number}
     * @memberof TweetData
     */
    user_friends_count: number;
    /**
     * 
     * @type {number}
     * @memberof TweetData
     */
    user_followers_count: number;
    /**
     * 
     * @type {string}
     * @memberof TweetData
     */
    lang: string;
    /**
     * 
     * @type {number}
     * @memberof TweetData
     */
    quote_count: number;
    /**
     * 
     * @type {number}
     * @memberof TweetData
     */
    reply_count: number;
    /**
     * 
     * @type {number}
     * @memberof TweetData
     */
    retweet_count: number;
    /**
     * 
     * @type {number}
     * @memberof TweetData
     */
    favorite_count: number;
    /**
     * 
     * @type {string}
     * @memberof TweetData
     */
    hashtags: string;
    /**
     * 
     * @type {string}
     * @memberof TweetData
     */
    tweeted_at: string;
    /**
     * 
     * @type {boolean}
     * @memberof TweetData
     */
    is_quote: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TweetData
     */
    is_retweet: boolean;
    /**
     * 
     * @type {number}
     * @memberof TweetData
     */
    original_tweet_id?: number;
    /**
     * 
     * @type {string}
     * @memberof TweetData
     */
    keywords: string;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary execute job
         * @param {InlineObject} [inlineObject] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postApiTwitterUsers: async (inlineObject?: InlineObject, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/twitter/jobs`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof inlineObject !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(inlineObject !== undefined ? inlineObject : {}) : (inlineObject || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary execute job
         * @param {InlineObject} [inlineObject] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postApiTwitterUsers(inlineObject?: InlineObject, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).postApiTwitterUsers(inlineObject, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary execute job
         * @param {InlineObject} [inlineObject] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postApiTwitterUsers(inlineObject?: InlineObject, options?: any): AxiosPromise<object> {
            return DefaultApiFp(configuration).postApiTwitterUsers(inlineObject, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @summary execute job
     * @param {InlineObject} [inlineObject] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public postApiTwitterUsers(inlineObject?: InlineObject, options?: any) {
        return DefaultApiFp(this.configuration).postApiTwitterUsers(inlineObject, options).then((request) => request(this.axios, this.basePath));
    }

}


/**
 * TweetApi - axios parameter creator
 * @export
 */
export const TweetApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Your GET endpoint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getApiTweets: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/tweets`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary fetch jobs data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getApiTwitterJobs: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/twitter/jobs`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getApiTwitterJobsReset: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/twitter/jobs/reset`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {TweetData} [tweetData] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postApiTweets: async (tweetData?: TweetData, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/tweets`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof tweetData !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(tweetData !== undefined ? tweetData : {}) : (tweetData || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TweetApi - functional programming interface
 * @export
 */
export const TweetApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Your GET endpoint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getApiTweets(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await TweetApiAxiosParamCreator(configuration).getApiTweets(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary fetch jobs data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getApiTwitterJobs(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await TweetApiAxiosParamCreator(configuration).getApiTwitterJobs(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getApiTwitterJobsReset(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await TweetApiAxiosParamCreator(configuration).getApiTwitterJobsReset(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {TweetData} [tweetData] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postApiTweets(tweetData?: TweetData, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await TweetApiAxiosParamCreator(configuration).postApiTweets(tweetData, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * TweetApi - factory interface
 * @export
 */
export const TweetApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Your GET endpoint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getApiTweets(options?: any): AxiosPromise<void> {
            return TweetApiFp(configuration).getApiTweets(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary fetch jobs data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getApiTwitterJobs(options?: any): AxiosPromise<object> {
            return TweetApiFp(configuration).getApiTwitterJobs(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getApiTwitterJobsReset(options?: any): AxiosPromise<object> {
            return TweetApiFp(configuration).getApiTwitterJobsReset(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {TweetData} [tweetData] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postApiTweets(tweetData?: TweetData, options?: any): AxiosPromise<void> {
            return TweetApiFp(configuration).postApiTweets(tweetData, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TweetApi - object-oriented interface
 * @export
 * @class TweetApi
 * @extends {BaseAPI}
 */
export class TweetApi extends BaseAPI {
    /**
     * 
     * @summary Your GET endpoint
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TweetApi
     */
    public getApiTweets(options?: any) {
        return TweetApiFp(this.configuration).getApiTweets(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary fetch jobs data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TweetApi
     */
    public getApiTwitterJobs(options?: any) {
        return TweetApiFp(this.configuration).getApiTwitterJobs(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TweetApi
     */
    public getApiTwitterJobsReset(options?: any) {
        return TweetApiFp(this.configuration).getApiTwitterJobsReset(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {TweetData} [tweetData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TweetApi
     */
    public postApiTweets(tweetData?: TweetData, options?: any) {
        return TweetApiFp(this.configuration).postApiTweets(tweetData, options).then((request) => request(this.axios, this.basePath));
    }

}


