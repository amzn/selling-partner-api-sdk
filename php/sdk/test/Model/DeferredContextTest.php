<?php
/**
 * DeferredContextTest
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
use SpApi\Model\finances\v2024_06_19\DeferredContext;

/**
 * DeferredContextTest Class Doc Comment
 *
 * @category    Class
 * @description Additional information related to Deferred transactions.
 * @package     SpApi
 */
class DeferredContextTest extends TestCase
{

    private DeferredContext $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new DeferredContext();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "DeferredContext"
     */
    public function testDeferredContext()
    {
        $this->assertInstanceOf(DeferredContext::class, $this->model);
    }

    /**
     * Test attribute "deferral_reason"
     */
    public function testPropertyDeferralReason()
    {
        $testValue = 'test';
        
        $this->model->setDeferralReason($testValue);
        $this->assertEquals($testValue, $this->model->getDeferralReason());
    }

    /**
     * Test attribute "maturity_date"
     */
    public function testPropertyMaturityDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setMaturityDate($testValue);
        $this->assertEquals($testValue, $this->model->getMaturityDate());
    }

    /**
     * Test attribute "deferral_status"
     */
    public function testPropertyDeferralStatus()
    {
        $testValue = 'test';
        
        $this->model->setDeferralStatus($testValue);
        $this->assertEquals($testValue, $this->model->getDeferralStatus());
    }
}
