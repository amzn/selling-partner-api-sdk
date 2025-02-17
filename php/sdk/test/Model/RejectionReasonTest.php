<?php
/**
 * RejectionReasonTest
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
use SpApi\Model\orders\v0\RejectionReason;

/**
 * RejectionReasonTest Class Doc Comment
 *
 * @category    Class
 * @description The reason for rejecting the order&#39;s regulated information. This is only present if the order is rejected.
 * @package     SpApi
 */
class RejectionReasonTest extends TestCase
{

    private RejectionReason $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new RejectionReason();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "RejectionReason"
     */
    public function testRejectionReason()
    {
        $this->assertInstanceOf(RejectionReason::class, $this->model);
    }

    /**
     * Test attribute "rejection_reason_id"
     */
    public function testPropertyRejectionReasonId()
    {
        $testValue = 'test';
        
        $this->model->setRejectionReasonId($testValue);
        $this->assertEquals($testValue, $this->model->getRejectionReasonId());
    }

    /**
     * Test attribute "rejection_reason_description"
     */
    public function testPropertyRejectionReasonDescription()
    {
        $testValue = 'test';
        
        $this->model->setRejectionReasonDescription($testValue);
        $this->assertEquals($testValue, $this->model->getRejectionReasonDescription());
    }
}
