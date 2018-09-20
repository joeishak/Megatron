-- Database Queries
    -- Financial Card Database Query
        /** NAME: FinancialActualTargetQuery **/

        select quarter, geo_code, product_name, market_area_code,
            route_to_market,subscription_offering,segment_pivot, 
            sum(cast (net_new_arr_actual as real))            as 'NetNewARRActual',
            sum(cast (net_new_arr_target as real))            as 'NetNewARRTarget', 
            sum(cast (net_cancellations_arr_actual as real))  as 'NetCancellationARRActual',  
            sum(cast (net_cancellations_arr_target as real))  as 'NetCancellationARRTarget', 
            sum(cast (gross_new_arr_actual as real))          as 'GrossNewARRActual',
            sum(cast (gross_new_arr_target as real))          as 'GrossNewARRTarget',
            sum(cast (term_end_renewal_actual as real))       as 'RenewalAtFPActual',
            sum(cast (term_end_renewal_target as real))       as 'RenewalAtFPTarget'
        from  dbo.rtb
        group by quarter,geo_code, product_name, market_area_code,
            route_to_market,subscription_offering,segment_pivot
		order by quarter;

    -- Financial Card Multichart Details
        /** NAME: FinancialMultichartQuery **/
         select 
                quarter,
                Month(fiscal_wk_ending_date) as 'Month',
                DatePArt(wk, fiscal_wk_ending_date) as 'Week',
                geo_code, 
                product_name, 
                market_area_code,
                route_to_market,
                subscription_offering,
                segment_pivot,
                sum(cast (net_new_arr_actual as real))               as 'NetNewARRActual',
                sum(cast (net_new_arr_target as real))               as 'NetNewARRTarget', 
                sum(cast (net_cancellations_arr_actual as real))     as 'NetCancellationARRActual',  
                sum(cast (net_cancellations_arr_target as real))     as 'NetCancellationARRTarget', 
                sum(cast (gross_new_arr_actual as real))             as 'GrossNewARRActual',
                sum(cast (gross_new_arr_target as real))             as 'GrossNewARRTarget',
                sum(cast (term_end_renewal_actual as real))          as 'RenewalAtFPActual',
                sum(cast (term_end_renewal_target as real))          as 'RenewalAtFPTarget',
                sum(cast (net_new_arr_ly as real))                   as 'NetNewARRLY',
                sum(cast (gross_new_arr_ly as real))                 as 'GrossNewARRLY', 
                sum(cast (net_cancellations_arr_ly as real))         as 'NetCancellationsARRLY',
                sum(cast (term_end_renewal_ly as real ))             as 'TermEndRenewalLY'		
            from dbo.rtb
                where try_cast(gross_new_arr_ly as real) is not null
                and try_cast(net_new_arr_ly as real) is not null
                and try_cast(net_cancellations_arr_ly as real) is not null
                and try_cast(term_end_renewal_ly as real) is not null
            group by quarter,Month(fiscal_wk_ending_date),DatePArt(wk, fiscal_wk_ending_date) ,geo_code, product_name, market_area_code,
                route_to_market,subscription_offering,segment_pivot    
            order by quarter;
    -- Financial Card Stat Defails



-- Financial Card XDC Cache Query

        -- Financial Squares Actual Vs Total
        select 
            sum(NetNewARRActual          )      as 'NetNewARRActual',
            sum(NetNewARRTarget          )      as 'NetNewARRTarget', 
            sum(NetCancellationARRActual )      as 'NetCancellationARRActual',  
            sum(NetCancellationARRTarget )      as 'NetCancellationARRTarget', 
            sum(GrossNewARRActual        )      as 'GrossNewARRActual',
            sum(GrossNewARRTarget        )      as 'GrossNewARRTarget',
            sum(RenewalAtFPActual        )      as 'RenewalAtFPActual',
            sum(RenewalAtFPTarget        )      as 'RenewalAtFPTarget'
            from financialactualtargetquery
                where geo_code in (@geofilters)
                    and quarter in (@quarterFilters)
                    and product_name in (@productFilters)
                    and market_area_code in (@maFilters)
                    and segment_pivot in (@segmentFilters)
                    and subscription_offering in (@subscriptionFilters)
                    and route_to_market in (@routeFilters);
            


            -- Financial Squares Multi Chart Details for a  Specific Quarter
          select 
            Week,
            sum(NetNewARRActual          )      as 'NetNewARRActual',
            sum(NetNewARRTarget          )      as 'NetNewARRTarget', 
            sum(NetCancellationARRActual )      as 'NetCancellationARRActual',  
            sum(NetCancellationARRTarget )      as 'NetCancellationARRTarget', 
            sum(GrossNewARRActual        )      as 'GrossNewARRActual',
            sum(GrossNewARRTarget        )      as 'GrossNewARRTarget',
            sum(RenewalAtFPActual        )      as 'RenewalAtFPActual',
            sum(RenewalAtFPTarget        )      as 'RenewalAtFPTarget',
		    sum(NetNewARRLY             )       as 'NetNewARRLY',
            sum(GrossNewARRLY           )       as 'GrossNewARRLY', 
            sum(NetCancellationsARRLY   )       as 'NetCancellationsARRLY',
            sum(TermEndRenewalLY        )       as 'TermEndRenewalLY'		
		    from FinancialMultichartQuery
                 where geo_code in (@geofilters)
                    and quarter in (@quarterFilters)
                    and product_name in (@productFilters)
                    and market_area_code in (@maFilters)
                    and segment_pivot in (@segmentFilters)
                    and subscription_offering in (@subscriptionFilters)
                    and route_to_market in (@routeFilters)
            group by Week;
            -- Financial Squares Multi Chart Details for All Quarterslocal
            select 
            Month,
            sum(NetNewARRActual          )      as 'NetNewARRActual',
            sum(NetNewARRTarget          )      as 'NetNewARRTarget', 
            sum(NetCancellationARRActual )      as 'NetCancellationARRActual',  
            sum(NetCancellationARRTarget )      as 'NetCancellationARRTarget', 
            sum(GrossNewARRActual        )      as 'GrossNewARRActual',
            sum(GrossNewARRTarget        )      as 'GrossNewARRTarget',
            sum(RenewalAtFPActual        )      as 'RenewalAtFPActual',
            sum(RenewalAtFPTarget        )      as 'RenewalAtFPTarget',
		    sum(NetNewARRLY             )       as 'NetNewARRLY',
            sum(GrossNewARRLY           )       as 'GrossNewARRLY', 
            sum(NetCancellationsARRLY   )       as 'NetCancellationsARRLY',
            sum(TermEndRenewalLY        )       as 'TermEndRenewalLY'		
		    from FinancialMultichartQuery
                 where geo_code in (@geofilters)
                    and quarter in (@quarterFilters)
                    and product_name in (@productFilters)
                    and market_area_code in (@maFilters)
                    and segment_pivot in (@segmentFilters)
                    and subscription_offering in (@subscriptionFilters)
                    and route_to_market in (@routeFilters)
            group by Month;
            -- Financial Squares Quarterly To Date Details
                -- All Data, Week Data, Quarterly Data

            -- Financial Squares Geo, Market ARea, Route, Segments, Subscriptions and Products


      