<?php
/**
 * ExcludedBenefitTest
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
use OpenAPI\Client\Model\merchantFulfillment\v0\ExcludedBenefit;

/**
 * ExcludedBenefitTest Class Doc Comment
 *
 * @category    Class
 * @description An object representing an excluded benefit that is excluded for a shipping offer or rate.
 * @package     OpenAPI\Client
 */
class ExcludedBenefitTest extends TestCase
{

    private ExcludedBenefit $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ExcludedBenefit();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ExcludedBenefit"
     */
    public function testExcludedBenefit()
    {
        $this->assertInstanceOf(ExcludedBenefit::class, $this->model);
    }

    /**
     * Test attribute "benefit"
     */
    public function testPropertyBenefit()
    {
        $testValue = 'test';
        
        $this->model->setBenefit($testValue);
        $this->assertEquals($testValue, $this->model->getBenefit());
    }

    /**
     * Test attribute "reason_codes"
     */
    public function testPropertyReasonCodes()
    {
        $testValue = [];
        
        $this->model->setReasonCodes($testValue);
        $this->assertEquals($testValue, $this->model->getReasonCodes());
    }
}
