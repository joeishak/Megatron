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

/****************************************
*      Azure Server InfoBurst Queries   *
****************************************/

    /** DB Connection AdobeDB Queries 
    **********************************/ 

-- A. Filters Segmented by different filter fields
    /* 
    Name: GeoFilters */
select distinct geo_code from dbo.rtb
/* 
    Name: MarketFilters */
select  distinct market_area_code from dbo.rtb
/* 
    Name: QuarterFilters */
select distinct quarter  from dbo.rtb;
/* 
    Name: RouteFilters */
select distinct route_to_market from dbo.rtb;
/* 
    Name: SubscriptionFilters */
select distinct subscription_offering  from dbo.rtb;
/* 
    Name: ProductFilters */
select distinct product_name from dbo.rtb;
/* 
    Name: SegmentFilters */
select  distinct segment_pivot from dbo.rtb;

--  B. Data  Segment queries by Quarter N segmen

/* 
    Name: 2017Q1 */
Select top 500000
net_new_arr_actual, 
net_new_arr_target, 
net_cancellations_arr_actual, 
net_cancellations_arr_target, 
gross_new_arr_target, 
gross_new_arr_actual,
term_end_renewal_actual,
term_end_renewal_target,
geo_code,
market_area_code,
segment_pivot,
subscription_offering,
route_to_market,
product_name
from dbo.rtb
where quarter like '2017-Q1';
/* 
    Name: 2017Q2 */
Select  top 500000
net_new_arr_actual, 
net_new_arr_target, 
net_cancellations_arr_actual, 
net_cancellations_arr_target, 
gross_new_arr_target, 
gross_new_arr_actual,
term_end_renewal_actual,
term_end_renewal_target,
geo_code,
market_area_code,
segment_pivot,
subscription_offering,
route_to_market,
product_name
from dbo.rtb
where quarter like '2017-Q2';
/* 
    Name: 2017Q3 */
Select top 500000
net_new_arr_actual, 
net_new_arr_target, 
net_cancellations_arr_actual, 
net_cancellations_arr_target, 
gross_new_arr_target, 
gross_new_arr_actual,
term_end_renewal_actual,
term_end_renewal_target,
geo_code,
market_area_code,
segment_pivot,
subscription_offering,
route_to_market,
product_name
from dbo.rtb
where quarter like '2017-Q3';
/* 
    Name: 2017Q4 */
Select top 500000
net_new_arr_actual, 
net_new_arr_target, 
net_cancellations_arr_actual, 
net_cancellations_arr_target, 
gross_new_arr_target, 
gross_new_arr_actual,
term_end_renewal_actual,
term_end_renewal_target,
geo_code,
market_area_code,
segment_pivot,
subscription_offering,
route_to_market,
product_name
from dbo.rtb
where quarter like '2017-Q4';
/* 
    Name: 2018Q1 */
Select top 500000
net_new_arr_actual, 
net_new_arr_target, 
net_cancellations_arr_actual, 
net_cancellations_arr_target, 
gross_new_arr_target, 
gross_new_arr_actual,
term_end_renewal_actual,
term_end_renewal_target,
geo_code,
market_area_code,
segment_pivot,
subscription_offering,
route_to_market,
product_name
from dbo.rtb
where quarter like '2018-Q1';
/* 
    Name: 2018Q2 */
Select top 500000
net_new_arr_actual, 
net_new_arr_target, 
net_cancellations_arr_actual, 
net_cancellations_arr_target, 
gross_new_arr_target, 
gross_new_arr_actual,
term_end_renewal_actual,
term_end_renewal_target,
geo_code,
market_area_code,
segment_pivot,
subscription_offering,
route_to_market,
product_name
from dbo.rtb
where quarter like '2018-Q2';
/* 
    Name: 2018Q2 */
Select top 500000
net_new_arr_actual, 
net_new_arr_target, 
net_cancellations_arr_actual, 
net_cancellations_arr_target, 
gross_new_arr_target, 
gross_new_arr_actual,
term_end_renewal_actual,
term_end_renewal_target,
geo_code,
market_area_code,
segment_pivot,
subscription_offering,
route_to_market,
product_name
from dbo.rtb
where quarter like '2018-Q3';


/** XDC for Data **/ 
/* Cache Queries */
select sum(net_new_arr_actual) as 'Net New ARR Actual', 
sum(net_new_arr_target) as 'Net New ARR Target', 
sum(net_cancellations_arr_actual) as 'Net Cancellation ARR Actual', 
sum(net_cancellations_arr_target) as 'Net Cancellation ARR Target', 
sum(gross_new_arr_target) as 'Gross New ARR Target', 
sum(gross_new_arr_actual) as 'Gross New ARR Actual',
sum(term_end_renewal_actual) as 'Renewal @FP Actual',
sum(term_end_renewal_target) as 'Renewal @FP Target'
from  2017Q1
where geo_code in (@geofilters)
and product_name in (@productFilters)
and market_area_code in (@maFilters)
and segment_pivot in (@segmentFilters)
and subscription_offering in (@subscriptionFilters)
and route_to_market in (@routeFilters);
select sum(net_new_arr_actual), 
sum(net_new_arr_target), 
sum(net_cancellations_arr_actual), 
sum(net_cancellations_arr_target), 
sum(gross_new_arr_target), 
sum(gross_new_arr_actual),
sum(term_end_renewal_actual),
sum(term_end_renewal_target)
from  2017Q2;
select sum(net_new_arr_actual), 
sum(net_new_arr_target), 
sum(net_cancellations_arr_actual), 
sum(net_cancellations_arr_target), 
sum(gross_new_arr_target), 
sum(gross_new_arr_actual),
sum(term_end_renewal_actual),
sum(term_end_renewal_target)
from  2017Q3;
select sum(net_new_arr_actual), 
sum(net_new_arr_target), 
sum(net_cancellations_arr_actual), 
sum(net_cancellations_arr_target), 
sum(gross_new_arr_target), 
sum(gross_new_arr_actual),
sum(term_end_renewal_actual),
sum(term_end_renewal_target)
from  2017Q4;
select sum(net_new_arr_actual), 
sum(net_new_arr_target), 
sum(net_cancellations_arr_actual), 
sum(net_cancellations_arr_target), 
sum(gross_new_arr_target), 
sum(gross_new_arr_actual),
sum(term_end_renewal_actual),
sum(term_end_renewal_target)
from  2018Q1;
select sum(net_new_arr_actual), 
sum(net_new_arr_target), 
sum(net_cancellations_arr_actual), 
sum(net_cancellations_arr_target), 
sum(gross_new_arr_target), 
sum(gross_new_arr_actual),
sum(term_end_renewal_actual),
sum(term_end_renewal_target)
from  2018Q2;
select sum(net_new_arr_actual), 
sum(net_new_arr_target), 
sum(net_cancellations_arr_actual), 
sum(net_cancellations_arr_target), 
sum(gross_new_arr_target), 
sum(gross_new_arr_actual),
sum(term_end_renewal_actual),
sum(term_end_renewal_target)
from  2018Q3


/**
XDC MultiChart 
**/

SELECT week_no,fiscal_wk_ending_date,quarter,
sum(net_new_arr_actual)

FROM dbo.rtb

group by week_no, fiscal_wk_ending_date,quarter
order by 2;