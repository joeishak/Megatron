/** Select the sum of Net New Arr, Gross New Arr, Cancellations ARR, Renewal ARR actual values**/
SELECT 
    SUM(net_new_arr_actual) 'NetNewArrValue', 
    SUM(gross_new_arr_actual) 'GrossNewArrValue',  
    SUM(net_cancellations_arr_actual) 'NetCancellationsArrValue',
    SUM(term_end_renewal_actual) 'RenewalFpARRValue'
FROM dbo.rtb;

/** IBE **/
-- endpoint: 'FinCards_Actual';
-- xdc: 447
-- parameters: none;


/** Select the sum of Net New Arr, Gross New Arr, Cancellations ARR, Renewal ARR target values**/
SELECT 
    SUM(net_new_arr_target) 'NetNewArrTarget', 
    SUM(gross_new_arr_target) 'GrossNewArrTarget',  
    SUM(net_cancellations_arr_target) 'NetCancellationsArrTarget',
    SUM(term_end_renewal_Target) 'RenewalFpARRTarget'
FROM dbo.rtb;

/** IBE **/
-- endpoint: 'FinCards_Actual';
-- xdc: 447
-- parameters: none;

/* Select all the unique values for Quarter */
SELECT DISTINCT quarter 'Quarter' from dbo.rtb;
/* Select all the unique values for Geo */
SELECT DISTINCT geo_code 'Geo' from dbo.rtb;
/* Select all the unique values for Product Name */
SELECT DISTINCT product_name 'ProductName' from dbo.rtb;
/* Select all the unique values for Subscription Offering */
SELECT DISTINCT subscription_offering 'Subscription' from dbo.rtb;
/* Select all the unique values for Route To Market */
SELECT DISTINCT route_to_market 'RouteToMarket' from dbo.rtb;
/* Select all the unique values for Segment */
SELECT DISTINCT segment_pivot 'Segment' from dbo.rtb;

/** IBE **/

/** QUARTERS **/
-- endpoint: 'MultiFilter_Quarters';
-- xdc: 447
-- parameters: none;

/** GEO **/
-- endpoint: 'MultiFilter_GeoCode';
-- xdc: 447
-- parameters: none;

/** PRODUCT NAME **/
-- endpoint: 'MultiFilter_ProductName';
-- xdc: 447
-- parameters: none;

/** Subscriptions **/
-- endpoint: 'MultiFilter_Subscriptions';
-- xdc: 447
-- parameters: none;

/** Route To Market **/
-- endpoint: 'MultiFilter_RouteToMarket';
-- xdc: 447
-- parameters: none;