-- Database Queries
    -- Financial Card Database Query
        /** NAME: FinancialTargetActualQuery **/

        select quarter, geo_code, product_name, market_area_code,
            route_to_market,subscription_offering,segment_pivot, 
            sum(cast (net_new_arr_actual as decimal))        as 'NetNewARRActual',
            sum(cast (net_new_arr_target as int))            as 'NetNewARRTarget', 
            sum(cast (net_cancellations_arr_actual as int))  as 'NetCancellationARRActual',  
            sum(cast (net_cancellations_arr_target as int))  as 'NetCancellationARRTarget', 
            sum(cast (gross_new_arr_actual as int))          as 'GrossNewARRActual',
            sum(cast (gross_new_arr_target as int))          as 'GrossNewARRTarget',
            sum(cast (term_end_renewal_actual as int))       as 'RenewalAtFPActual',
            sum(cast (term_end_renewal_target as int))       as 'RenewalAtFPTarget'
        from  dbo.rtb
        group by quarter,geo_code, product_name, market_area_code,
            route_to_market,subscription_offering,segment_pivot
		order by quarter;

    -- Financial Card Multichart Details
        /** NAME: FinancialMultichartQuery **/
         select 
                quarter,
                month(fiscal_wk_ending_date) 'Month',
                geo_code, 
                product_name, 
                market_area_code,
                route_to_market,
                subscription_offering,
                segment_pivot,
                sum(cast (net_new_arr_actual as decimal))               as 'NetNewARRActual',
                sum(cast (net_cancellations_arr_actual as decimal))     as 'NetCancellationARRActual',  
                sum(cast (gross_new_arr_actual as decimal))             as 'GrossNewARRActual',
                sum(cast (term_end_renewal_actual as int))              as 'RenewalAtFPActual',
                sum(cast (net_new_arr_ly as decimal))                   as 'NetNewARRLY',
                sum(cast (gross_new_arr_ly as decimal))                 as 'GrossNewARRLY', 
                sum(cast (net_cancellations_arr_ly as decimal))         as 'NetCancellationsARRLY',
                sum(cast (term_end_renewal_ly as decimal ))             as 'TermEndRenewalLY'		
            from dbo.rtb
                where try_cast(gross_new_arr_ly as decimal) is not null
                and try_cast(net_new_arr_ly as decimal) is not null
                and try_cast(net_cancellations_arr_ly as decimal) is not null
                and try_cast(term_end_renewal_ly as decimal) is not null
            group by quarter,month(fiscal_wk_ending_date),geo_code, product_name, market_area_code,
                route_to_market,subscription_offering,segment_pivot    
            order by quarter;
    -- Financial Card Stat Defails



-- Financial Card XDC Cache Query

        -- Financial Squares Actual Vs Total
        select 
            sum(NetNewARRActual          )  ,
            sum(NetNewARRTarget          )            , 
            sum(NetCancellationARRActual )  ,  
            sum(NetCancellationARRTarget )  , 
            sum(GrossNewARRActual        )    ,
            sum(GrossNewARRTarget        )    ,
            sum(RenewalAtFPActual        )    ,
            sum(RenewalAtFPTarget        )    
            from financialactualtargetquery
                where geo_code in (@geofilters)
                    and quarter in (@quarterFilters)
                    and product_name in (@productFilters)
                    and market_area_code in (@maFilters)
                    and segment_pivot in (@segmentFilters)
                    and subscription_offering in (@subscriptionFilters)
                    and route_to_market in (@routeFilters);
            


            -- Financial Squares Multi Chart Details
          select 
          Month,
            sum(RenewalAtFPActual       )    ,
            sum(GrossNewARRActual       )    ,
            sum(NetCancellationARRActual) ,  
            sum(NetNewARRActual         )  ,
		    sum(NetNewARRLY             ),
            sum(GrossNewARRLY           ),
            sum(NetCancellationsARRLY   ),
            sum(TermEndRenewalLY        )
		    from FinancialMultichartQuery
                 where geo_code in (@geofilters)
                    and quarter in (@quarterFilters)
                    and product_name in (@productFilters)
                    and market_area_code in (@maFilters)
                    and segment_pivot in (@segmentFilters)
                    and subscription_offering in (@subscriptionFilters)
                    and route_to_market in (@routeFilters);
            -- Financial Squares Stats Details

            -- Financial Squares Quarterly To Date Details
                -- All Data, Week Data, Quarterly Data

            -- Financial Squares Geo, Market ARea, Route, Segments, Subscriptions and Products


      