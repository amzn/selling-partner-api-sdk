<?php
/**
 * FeesEstimateByIdRequestTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace SpApi\Test\Model;

use PHPUnit\Framework\TestCase;
use SpApi\Model\productFees\v0\FeesEstimateByIdRequest;

/**
 * FeesEstimateByIdRequestTest Class Doc Comment
 *
 * @category    Class
 * @description A product, marketplace, and proposed price used to request estimated fees.
 * @package     SpApi
 */
class FeesEstimateByIdRequestTest extends TestCase
{

    private FeesEstimateByIdRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FeesEstimateByIdRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FeesEstimateByIdRequest"
     */
    public function testFeesEstimateByIdRequest()
    {
        $this->assertInstanceOf(FeesEstimateByIdRequest::class, $this->model);
    }

    /**
     * Test attribute "fees_estimate_request"
     */
    public function testPropertyFeesEstimateRequest()
    {
        
        $testValue = new \SpApi\Model\productFees\v0\FeesEstimateRequest();
        
        $this->model->setFeesEstimateRequest($testValue);
        $this->assertEquals($testValue, $this->model->getFeesEstimateRequest());
    }

    /**
     * Test attribute "id_type"
     */
    public function testPropertyIdType()
    {
        $enumInstance = new \SpApi\Model\productFees\v0\IdType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setIdType($testValue);
        $this->assertEquals($testValue, $this->model->getIdType());
    }

    /**
     * Test attribute "id_value"
     */
    public function testPropertyIdValue()
    {
        $testValue = 'test';
        
        $this->model->setIdValue($testValue);
        $this->assertEquals($testValue, $this->model->getIdValue());
    }
}
