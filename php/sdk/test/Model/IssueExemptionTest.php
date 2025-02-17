<?php
/**
 * IssueExemptionTest
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
use SpApi\Model\listings\items\v2021_08_01\IssueExemption;

/**
 * IssueExemptionTest Class Doc Comment
 *
 * @category    Class
 * @description Conveying the status of the listed enforcement actions and, if applicable, provides information about the exemption&#39;s expiry date.
 * @package     SpApi
 */
class IssueExemptionTest extends TestCase
{

    private IssueExemption $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new IssueExemption();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "IssueExemption"
     */
    public function testIssueExemption()
    {
        $this->assertInstanceOf(IssueExemption::class, $this->model);
    }

    /**
     * Test attribute "status"
     */
    public function testPropertyStatus()
    {
        $enumInstance = new IssueExemption();
        $allowedValues = $enumInstance->getStatusAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setStatus($testValue);
        $this->assertEquals($testValue, $this->model->getStatus());
    }

    /**
     * Test attribute "expiry_date"
     */
    public function testPropertyExpiryDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setExpiryDate($testValue);
        $this->assertEquals($testValue, $this->model->getExpiryDate());
    }
}
