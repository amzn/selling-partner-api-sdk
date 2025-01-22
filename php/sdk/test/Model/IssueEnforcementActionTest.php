<?php
/**
 * IssueEnforcementActionTest
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
use OpenAPI\Client\Model\listings\items\IssueEnforcementAction;

/**
 * IssueEnforcementActionTest Class Doc Comment
 *
 * @category    Class
 * @description The enforcement action taken by Amazon that affect the publishing or status of a listing
 * @package     OpenAPI\Client
 */
class IssueEnforcementActionTest extends TestCase
{

    private IssueEnforcementAction $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new IssueEnforcementAction();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "IssueEnforcementAction"
     */
    public function testIssueEnforcementAction()
    {
        $this->assertInstanceOf(IssueEnforcementAction::class, $this->model);
    }

    /**
     * Test attribute "action"
     */
    public function testPropertyAction()
    {
        $testValue = 'test';
        
        $this->model->setAction($testValue);
        $this->assertEquals($testValue, $this->model->getAction());
    }
}
