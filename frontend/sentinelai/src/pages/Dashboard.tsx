import React from 'react';

import StatsGrid from '../components/StatsGrid';
import ThreatCard from '../components/ThreatCard';
import TrafficChart from '../components/TrafficChart';
import ProbabilityGauge from '../components/ProbabilityGauge';
import LiveThreatFeed from '../components/LiveThreatFeed';
import AttackMap from '../components/AttackMap';
import AlertPanel from '../components/AlertPanel';

import { usePrediction } from '../hooks/usePrediction';

import { Loader2 } from 'lucide-react';

import { cn } from '../lib/utils';

const Dashboard: React.FC = () => {

  const {
    prediction,
    loading,
    error
  } = usePrediction();

  if (loading && !prediction) {

    return (

      <div className="
        h-96
        flex
        flex-col
        items-center
        justify-center
        gap-4
      ">

        <Loader2 className="
          w-12
          h-12
          text-cyber-blue
          animate-spin
        " />

        <p className="
          text-sm
          font-mono
          text-cyber-blue
          animate-pulse
          tracking-widest
        ">
          INITIALIZING_SENTINEL_CORE...
        </p>

      </div>
    );
  }

  if (error) {

    return (

      <div className="
        h-96
        flex
        items-center
        justify-center
        text-red-500
        font-mono
      ">

        ERROR_CONNECTING_TO_BACKEND

      </div>
    );
  }

  return (

    <div className="space-y-8 pb-12">

      <header className="
        flex
        flex-col
        md:flex-row
        md:items-end
        justify-between
        gap-4
      ">

        <div>

          <h2 className="
            text-3xl
            font-bold
            tracking-tighter
            uppercase
            italic
          ">

            Command
            <span className="text-cyber-blue">
              {' '}Dashboard
            </span>

          </h2>

          <p className="
            text-slate-500
            font-mono
            text-xs
            mt-1
          ">

            INTEGRATED_SECURITY_OPERATIONS_CENTER
            {' // '}
            LIVE_AI_MONITORING

          </p>

        </div>

        <div className="flex gap-3">

          <button className="
            cyber-button
            text-xs
            py-1.5
            h-auto
          ">
            FORCE_SCAN
          </button>

          <button className="
            cyber-button
            text-xs
            py-1.5
            h-auto
            border-cyber-magenta
            text-cyber-magenta
            hover:bg-cyber-magenta
            hover:shadow-[0_0_20px_rgba(255,0,255,0.5)]
          ">
            EMERGENCY_LOCK
          </button>

        </div>

      </header>

      <StatsGrid />

      <div className="
        grid
        grid-cols-1
        lg:grid-cols-3
        gap-6
      ">

        <div className="
          lg:col-span-1
          flex
          flex-col
          gap-6
        ">

          <ThreatCard
            prediction={
              prediction?.xgboost_prediction ?? 0
            }
            probability={
              prediction?.xgboost_probability ?? 0
            }
            isAnomaly={
              prediction?.anomaly_detected === 1
            }
            className="flex-1"
          />

          <div className="
            glass-panel
            p-6
            flex
            flex-col
            items-center
            justify-center
            min-h-[300px]
          ">

            <h3 className="
              text-xs
              font-mono
              text-slate-500
              uppercase
              tracking-[0.3em]
              mb-6
              self-start
            ">
              Integrity Analysis
            </h3>

            <ProbabilityGauge
              value={
                prediction?.xgboost_probability ?? 0
              }
            />

          </div>

        </div>

        <div className="
          lg:col-span-2
          flex
          flex-col
          gap-6
        ">

          <TrafficChart />

          <div className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-6
            flex-1
          ">

            <AttackMap />

            <AlertPanel />

          </div>

        </div>

      </div>

      <div className="
        grid
        grid-cols-1
        lg:grid-cols-4
        gap-6
      ">

        <div className="lg:col-span-3">

          <div className="
            glass-panel
            p-6
          ">

            <div className="
              flex
              items-center
              justify-between
              mb-6
            ">

              <h3 className="
                text-sm
                font-bold
                uppercase
                tracking-widest
                text-white
              ">

                Advanced Threat Distribution

              </h3>

              <div className="
                flex
                items-center
                gap-2
                px-3
                py-1
                bg-cyber-blue/10
                border
                border-cyber-blue/20
                rounded-full
                text-[10px]
                font-mono
                text-cyber-blue
              ">

                AUTO_REFRESH: ON

              </div>

            </div>

            <div className="
              grid
              grid-cols-2
              md:grid-cols-4
              gap-8
            ">

              {[
                {
                  label: 'Phishing',
                  val: '24%',
                  color: 'bg-cyber-blue'
                },
                {
                  label: 'Malware',
                  val: '43%',
                  color: 'bg-cyber-magenta'
                },
                {
                  label: 'Infiltration',
                  val: '12%',
                  color: 'bg-cyber-neon'
                },
                {
                  label: 'Exfiltration',
                  val: '21%',
                  color: 'bg-cyber-yellow'
                },
              ].map((item) => (

                <div
                  key={item.label}
                  className="
                    text-center
                    space-y-2
                  "
                >

                  <div className="
                    text-[10px]
                    font-mono
                    text-slate-500
                    uppercase
                  ">

                    {item.label}

                  </div>

                  <div className="
                    text-xl
                    font-bold
                    text-white
                  ">

                    {item.val}

                  </div>

                  <div className="
                    h-1
                    bg-white/5
                    rounded-full
                    overflow-hidden
                  ">

                    <div
                      className={cn(
                        'h-full',
                        item.color
                      )}
                      style={{
                        width: item.val
                      }}
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

        <div className="
          lg:col-span-1
          h-[400px]
        ">

          <LiveThreatFeed />

        </div>

      </div>

    </div>
  );
};

export default Dashboard;