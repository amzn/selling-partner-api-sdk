<?php
/**
 * AcknowledgementStatusTest
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
use OpenAPI\Client\Model\vendorDfOrders\AcknowledgementStatus;

/**
 * AcknowledgementStatusTest Class Doc Comment
 *
 * @category    Class
 * @description Status of acknowledgement.
 * @package     OpenAPI\Client
 */
class AcknowledgementStatusTest extends TestCase
{

    private AcknowledgementStatus $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AcknowledgementStatus();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AcknowledgementStatus"
     */
    public function testAcknowledgementStatus()
    {
        $this->assertInstanceOf(AcknowledgementStatus::class, $this->model);
    }

    /**
     * Test attribute "code"
     */
    public function testPropertyCode()
    {
        $testValue = 'test';
        
        $this->model->setCode($testValue);
        $this->assertEquals($testValue, $this->model->getCode());
    }

    /**
     * Test attribute "description"
     */
    public function testPropertyDescription()
    {
        $testValue = 'test';
        
        $this->model->setDescription($testValue);
        $this->assertEquals($testValue, $this->model->getDescription());
    }
}
