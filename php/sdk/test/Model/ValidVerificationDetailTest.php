<?php
/**
 * ValidVerificationDetailTest
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
use SpApi\Model\orders\v0\ValidVerificationDetail;

/**
 * ValidVerificationDetailTest Class Doc Comment
 *
 * @category    Class
 * @description The types of verification details that may be provided for the order and the criteria required for when the type of verification detail can be provided. The types of verification details allowed depend on the type of regulated product and will not change order to order.
 * @package     SpApi
 */
class ValidVerificationDetailTest extends TestCase
{

    private ValidVerificationDetail $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ValidVerificationDetail();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ValidVerificationDetail"
     */
    public function testValidVerificationDetail()
    {
        $this->assertInstanceOf(ValidVerificationDetail::class, $this->model);
    }

    /**
     * Test attribute "verification_detail_type"
     */
    public function testPropertyVerificationDetailType()
    {
        $testValue = 'test';
        
        $this->model->setVerificationDetailType($testValue);
        $this->assertEquals($testValue, $this->model->getVerificationDetailType());
    }

    /**
     * Test attribute "valid_verification_statuses"
     */
    public function testPropertyValidVerificationStatuses()
    {
        $testValue = [];
        
        $this->model->setValidVerificationStatuses($testValue);
        $this->assertEquals($testValue, $this->model->getValidVerificationStatuses());
    }
}
