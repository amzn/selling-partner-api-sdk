<?php
/**
 * FeeDetailTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\productfees\FeeDetail;

/**
 * FeeDetailTest Class Doc Comment
 *
 * @category    Class
 * @description The type of fee, fee amount, and other details.
 * @package     OpenAPI\Client
 */
class FeeDetailTest extends TestCase
{

    private FeeDetail $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FeeDetail();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FeeDetail"
     */
    public function testFeeDetail()
    {
        $this->assertInstanceOf(FeeDetail::class, $this->model);
    }

    /**
     * Test attribute "fee_type"
     */
    public function testPropertyFeeType()
    {
        $testValue = 'test';
        
        $this->model->setFeeType($testValue);
        $this->assertEquals($testValue, $this->model->getFeeType());
    }

    /**
     * Test attribute "fee_amount"
     */
    public function testPropertyFeeAmount()
    {
        
        $testValue = new \OpenAPI\Client\Model\productfees\MoneyType();
        
        $this->model->setFeeAmount($testValue);
        $this->assertEquals($testValue, $this->model->getFeeAmount());
    }

    /**
     * Test attribute "fee_promotion"
     */
    public function testPropertyFeePromotion()
    {
        
        $testValue = new \OpenAPI\Client\Model\productfees\MoneyType();
        
        $this->model->setFeePromotion($testValue);
        $this->assertEquals($testValue, $this->model->getFeePromotion());
    }

    /**
     * Test attribute "tax_amount"
     */
    public function testPropertyTaxAmount()
    {
        
        $testValue = new \OpenAPI\Client\Model\productfees\MoneyType();
        
        $this->model->setTaxAmount($testValue);
        $this->assertEquals($testValue, $this->model->getTaxAmount());
    }

    /**
     * Test attribute "final_fee"
     */
    public function testPropertyFinalFee()
    {
        
        $testValue = new \OpenAPI\Client\Model\productfees\MoneyType();
        
        $this->model->setFinalFee($testValue);
        $this->assertEquals($testValue, $this->model->getFinalFee());
    }

    /**
     * Test attribute "included_fee_detail_list"
     */
    public function testPropertyIncludedFeeDetailList()
    {
        $testValue = [];
        
        $this->model->setIncludedFeeDetailList($testValue);
        $this->assertEquals($testValue, $this->model->getIncludedFeeDetailList());
    }
}
