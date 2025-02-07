<?php
/**
 * IssueEnforcementsTest
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
use OpenAPI\Client\Model\listings\items\v2021_08_01\IssueEnforcements;

/**
 * IssueEnforcementsTest Class Doc Comment
 *
 * @category    Class
 * @description This field provides information about the enforcement actions taken by Amazon that affect the publishing or status of a listing. It also includes details about any associated exemptions.
 * @package     OpenAPI\Client
 */
class IssueEnforcementsTest extends TestCase
{

    private IssueEnforcements $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new IssueEnforcements();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "IssueEnforcements"
     */
    public function testIssueEnforcements()
    {
        $this->assertInstanceOf(IssueEnforcements::class, $this->model);
    }

    /**
     * Test attribute "actions"
     */
    public function testPropertyActions()
    {
        $testValue = [];
        
        $this->model->setActions($testValue);
        $this->assertEquals($testValue, $this->model->getActions());
    }

    /**
     * Test attribute "exemption"
     */
    public function testPropertyExemption()
    {
        
        $testValue = new \OpenAPI\Client\Model\listings\items\v2021_08_01\IssueExemption();
        
        $this->model->setExemption($testValue);
        $this->assertEquals($testValue, $this->model->getExemption());
    }
}
