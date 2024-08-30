import React from "react";
import loan from "../assets/loan.png";
import "../styles/needfinancing.css";
const Needfinancing = () => {
  return (
    <div className="finan">
      <h4>Need Financing for a project? Check out our options below!</h4>
      <div className="loan">
        <div className="cash">
          <h6>12 Month Same-As-Cash Loan</h6>
          <a href="">
            <img className="image" src="https://rentchasers.com/wp-content/uploads/2022/06/Banner_12Mo_SAC.png" alt="" />
          </a>
          <p>
            *Credit and loans provided by EnerBank USA, Member FDIC, (1245
            Brickyard Rd., Suite 600, Salt Lake City, UT 84106) on approved
            credit, for a limited time. 17.99% fixed APR, effective as of
            September 2021, subject to change. Minimum loan amounts apply.
            Interest starts accruing when funds are disbursed. Interest is
            waived if repaid in 365 days. Repayment terms vary from 24 to 132
            months. Actual loan term may be shorter if less than the full
            approved amount of credit is used. First monthly loan payment due
            365 days after funds are disbursed.
          </p>
        </div>
        <div className="cash">
          <h6>Traditional Installment Loan</h6>
          <a href="">
            <img className="image" src="https://rentchasers.com/wp-content/uploads/2022/06/Banner_TIL_899-1499.png" alt="" />
          </a>
          <p>
            *Credit and loans provided by EnerBank USA, Member FDIC, (1245
            Brickyard Rd., Suite 600, Salt Lake City, UT 84106) on approved
            credit, for a limited time. 8.99% to 14.99% fixed APR, subject to
            change. Minimum loan amounts apply. Interest starts accruing when
            funds are disbursed. Open line period payments due 90 days after
            origination and monthly thereafter during open line period. When
            open line period ends, the balance becomes a fixed rate installment
            loan; repayment terms vary from 12 to 144 months. Actual loan term
            may be shorter if less than the full approved amount of credit is
            used. First monthly loan payment due 30 days from the end of the
            open line period.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Needfinancing;
