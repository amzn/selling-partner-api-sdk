<?php
/**
 * AcknowledgementStatusTest
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
use SpApi\Model\vendor\df\orders\v2021_12_28\AcknowledgementStatus;

/**
 * AcknowledgementStatusTest Class Doc Comment
 *
 * @category    Class
 * @description Status of acknowledgement.
 * @package     SpApi
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
