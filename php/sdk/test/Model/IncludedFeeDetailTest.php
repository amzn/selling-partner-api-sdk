<?php
/**
 * IncludedFeeDetailTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\productFees\IncludedFeeDetail;

/**
 * IncludedFeeDetailTest Class Doc Comment
 *
 * @category    Class
 * @description The type of fee, fee amount, and other details.
 * @package     OpenAPI\Client
 */
class IncludedFeeDetailTest extends TestCase
{

    private IncludedFeeDetail $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new IncludedFeeDetail();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "IncludedFeeDetail"
     */
    public function testIncludedFeeDetail()
    {
        $this->assertInstanceOf(IncludedFeeDetail::class, $this->model);
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
        
        $testValue = new \OpenAPI\Client\Model\productFees\MoneyType();
        
        $this->model->setFeeAmount($testValue);
        $this->assertEquals($testValue, $this->model->getFeeAmount());
    }

    /**
     * Test attribute "fee_promotion"
     */
    public function testPropertyFeePromotion()
    {
        
        $testValue = new \OpenAPI\Client\Model\productFees\MoneyType();
        
        $this->model->setFeePromotion($testValue);
        $this->assertEquals($testValue, $this->model->getFeePromotion());
    }

    /**
     * Test attribute "tax_amount"
     */
    public function testPropertyTaxAmount()
    {
        
        $testValue = new \OpenAPI\Client\Model\productFees\MoneyType();
        
        $this->model->setTaxAmount($testValue);
        $this->assertEquals($testValue, $this->model->getTaxAmount());
    }

    /**
     * Test attribute "final_fee"
     */
    public function testPropertyFinalFee()
    {
        
        $testValue = new \OpenAPI\Client\Model\productFees\MoneyType();
        
        $this->model->setFinalFee($testValue);
        $this->assertEquals($testValue, $this->model->getFinalFee());
    }
}
